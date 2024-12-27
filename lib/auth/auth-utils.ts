import { User, sampleUsers } from './sample-users';

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  // In a real app, this would verify against a database
  const user = sampleUsers.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  return user || null;
}

export function isAuthorized(user: User, allowedRoles: string[]): boolean {
  return allowedRoles.includes(user.role);
}