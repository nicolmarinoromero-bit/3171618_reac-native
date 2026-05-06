import { Audit } from '../types';

export const mockAudits: Audit[] = [
  {
    id: '1',
    clientName: 'TechSolutions SAS',
    clientIndustry: 'Tecnología',
    auditorName: 'María González',
    auditDate: '2024-06-15',
    status: 'in_progress',
    findingsCount: 12,
    imageUrl: 'https://picsum.photos/id/0/200/200',
  },
  {
    id: '2',
    clientName: 'Salud Total EPS',
    clientIndustry: 'Salud',
    auditorName: 'Carlos Rodríguez',
    auditDate: '2024-06-10',
    status: 'completed',
    findingsCount: 5,
    imageUrl: 'https://picsum.photos/id/20/200/200',
  },
  {
    id: '3',
    clientName: 'Construcciones Andinas',
    clientIndustry: 'Construcción',
    auditorName: 'Ana Martínez',
    auditDate: '2024-06-20',
    status: 'pending',
    findingsCount: 0,
    imageUrl: 'https://picsum.photos/id/1/200/200',
  },
  {
    id: '4',
    clientName: 'Financiera Segura',
    clientIndustry: 'Finanzas',
    auditorName: 'Juan Pérez',
    auditDate: '2024-06-05',
    status: 'completed',
    findingsCount: 8,
    imageUrl: 'https://picsum.photos/id/2/200/200',
  },
];