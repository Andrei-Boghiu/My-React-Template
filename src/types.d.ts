export interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
}

export interface SidebarConfig {
  route: string;
  name: string;
}
