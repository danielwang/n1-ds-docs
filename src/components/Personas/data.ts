/**
 * Source content: "nebulaONE User Personas" reference — the six roles
 * the platform is designed around, spanning both the people who create
 * and moderate agents and the people who rely on them day to day.
 */

export interface Persona {
  id: string;
  avatar: string;
  name: string;
  role: string;
  badge: string;
  focus: string;
  accent: 'cyan' | 'purple';
}

export const personas: Persona[] = [
  {
    id: 'sarah-student',
    avatar: '/img/personas/sarah-student.png',
    name: 'Sarah Student',
    role: 'University Student',
    badge: 'Agents user & Personal Agent creator',
    focus: 'Uses agents to get through coursework faster, and builds her own personal agents to fit the way she studies.',
    accent: 'cyan',
  },
  {
    id: 'peter-professor',
    avatar: '/img/personas/peter-professor.png',
    name: 'Peter Professor',
    role: 'Academic Staff',
    badge: 'Official Agent creator',
    focus: 'Builds official, faculty-sanctioned agents that represent a course or department to students.',
    accent: 'purple',
  },
  {
    id: 'adam-admin',
    avatar: '/img/personas/adam-admin.png',
    name: 'Adam Admin',
    role: 'IT Admin @ University',
    badge: 'N1 admin & Official Agent creator',
    focus: 'Administers the nebulaONE platform for the institution and publishes official agents on its behalf.',
    accent: 'cyan',
  },
  {
    id: 'molly-moderator',
    avatar: '/img/personas/molly-moderator.png',
    name: 'Molly Moderator',
    role: 'IT Staff @ University',
    badge: 'Agents Moderator',
    focus: 'Reviews agents created across the university community and keeps them within policy.',
    accent: 'purple',
  },
  {
    id: 'cyrus-cio',
    avatar: '/img/personas/cyrus-cio.png',
    name: 'Cyrus CIO',
    role: 'CIO @ University',
    badge: 'Decision maker & analytics consumer',
    focus: 'Sponsors platform adoption and reads analytics to guide where the institution invests next.',
    accent: 'cyan',
  },
  {
    id: 'dora-developer',
    avatar: '/img/personas/dora-developer.png',
    name: 'Dora Developer',
    role: 'AI Developer',
    badge: 'Agent developer',
    focus: 'Builds and extends agents with nebulaONE\u2019s developer tooling, APIs, and SDKs.',
    accent: 'purple',
  },
];
