export type UserRole = 'USER' | 'LEGAL_STAFF' | 'LEGAL_ADMIN' | 'SUPER_ADMIN';

export interface User {
  id: string;
  email: string;
  password: string; // In a real app, this would be hashed
  firstName: string;
  lastName: string;
  role: UserRole;
}

export const sampleUsers: User[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    role: 'USER'
  },
  {
    id: '2',
    email: 'sarah.wilson@example.com',
    password: 'password123',
    firstName: 'Sarah',
    lastName: 'Wilson',
    role: 'LEGAL_STAFF'
  },
  {
    id: '3',
    email: 'emily.chen@example.com',
    password: 'password123',
    firstName: 'Emily',
    lastName: 'Chen',
    role: 'LEGAL_ADMIN'
  },
  {
    id: '4',
    email: 'admin@example.com',
    password: 'password123',
    firstName: 'Admin',
    lastName: 'User',
    role: 'SUPER_ADMIN'
  }
];