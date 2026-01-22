import React, { createContext, useContext, useState, useEffect } from "react";
import type { User, Role } from "@/types/auth";
import { hasPermission as checkPermission } from "@/config/permissions";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: any) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for simulation
const MOCK_USERS: Record<string, Partial<User>> = {
  "admin@school.edu": { name: "Super Admin", role: "super_admin" },
  "dean@school.edu": { name: "Dean Smith", role: "dept_admin" },
  "coord@school.edu": { name: "Prog. Coord", role: "program_coordinator" },
  "faculty@school.edu": { name: "Prof. Doe", role: "faculty" },
  "career@school.edu": { name: "Career Advisor", role: "career_services" },
  "it@school.edu": { name: "IT Manager", role: "it_admin" },
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persisted session
    const storedUser = localStorage.getItem("crayonics_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string) => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Determine role based on email or default to faculty
    let role: Role = "faculty";
    let name = "Faculty Member";

    // Check strict mocks
    if (MOCK_USERS[email]) {
      role = MOCK_USERS[email].role as Role;
      name = MOCK_USERS[email].name!;
    } else {
      // Heuristic for demo purposes
      if (email.includes("admin")) {
        role = "super_admin";
        name = "Admin User";
      } else if (email.includes("dean")) {
        role = "dept_admin";
        name = "Department Dean";
      } else if (email.includes("it")) {
        role = "it_admin";
        name = "IT Staff";
      } else if (email.includes("career")) {
        role = "career_services";
        name = "Career Counselor";
      }
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role,
      avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };

    setUser(newUser);
    localStorage.setItem("crayonics_user", JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("crayonics_user");
  };

  const hasPermission = (permission: any) => {
    if (!user) return false;
    return checkPermission(user.role, permission);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
