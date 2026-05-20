import { Audit } from '../types';

export const mockAudits: Audit[] = [
  { id: '1', clientName: 'TechSolutions SAS', industry: 'Tecnología', auditor: 'María González', auditDate: '2024-06-15', status: 'in_progress', findings: 12, imageUrl: 'https://picsum.photos/id/0/200/200' },
  { id: '2', clientName: 'Salud Total EPS', industry: 'Salud', auditor: 'Carlos Rodríguez', auditDate: '2024-06-10', status: 'completed', findings: 5, imageUrl: 'https://picsum.photos/id/20/200/200' },
  { id: '3', clientName: 'Construcciones Andinas', industry: 'Construcción', auditor: 'Ana Martínez', auditDate: '2024-06-20', status: 'pending', findings: 0, imageUrl: 'https://picsum.photos/id/1/200/200' },
  { id: '4', clientName: 'Financiera Segura', industry: 'Finanzas', auditor: 'Juan Pérez', auditDate: '2024-06-05', status: 'completed', findings: 8, imageUrl: 'https://picsum.photos/id/2/200/200' },
  { id: '5', clientName: 'Energía Verde', industry: 'Energía', auditor: 'Lucía Méndez', auditDate: '2024-06-18', status: 'in_progress', findings: 3, imageUrl: 'https://picsum.photos/id/3/200/200' },
  { id: '6', clientName: 'Logística Rápida', industry: 'Transporte', auditor: 'Roberto Díaz', auditDate: '2024-06-22', status: 'pending', findings: 1, imageUrl: 'https://picsum.photos/id/4/200/200' },
  { id: '7', clientName: 'Moda Ética', industry: 'Textil', auditor: 'Claudia Ríos', auditDate: '2024-06-12', status: 'completed', findings: 10, imageUrl: 'https://picsum.photos/id/5/200/200' },
  { id: '8', clientName: 'Alimentos Naturales', industry: 'Alimentos', auditor: 'Jorge Ortega', auditDate: '2024-06-25', status: 'pending', findings: 2, imageUrl: 'https://picsum.photos/id/6/200/200' },
  { id: '9', clientName: 'Inmobiliaria Futuro', industry: 'Bienes Raíces', auditor: 'Sofía Herrera', auditDate: '2024-06-08', status: 'in_progress', findings: 7, imageUrl: 'https://picsum.photos/id/7/200/200' },
  { id: '10', clientName: 'Educación Online', industry: 'Educación', auditor: 'Fernando Rojas', auditDate: '2024-06-28', status: 'pending', findings: 0, imageUrl: 'https://picsum.photos/id/8/200/200' },
];