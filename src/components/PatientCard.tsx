import type { Patient } from '../types/patient';
import defaultAvatar from '../assets/img/Default_Profile.png';
import './PatientCard.css';

interface PatientCardProps {
  patient: Patient;
  onEdit: (patient: Patient) => void;
  onDelete: (id: string) => void;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
}

export const PatientCard = ({
  patient,
  onEdit,
  onDelete,
  isExpanded,
  onToggleExpand,
}: PatientCardProps) => {
  const toggleExpand = () => {
    onToggleExpand(patient.id);
  };

  const handleEdit = () => {
    onEdit(patient);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${patient.name}?`)) {
      onDelete(patient.id);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultAvatar;
  };

  return (
    <div className="patient-card">
      <div className="patient-card-header">
        <img 
          src={patient.avatar || defaultAvatar} 
          alt={patient.name} 
          className="patient-avatar"
          onError={handleImageError}
        />
        <div className="patient-info">
          <h3 className="patient-name">{patient.name}</h3>
          <a
            href={patient.website}
            target="_blank"
            rel="noopener noreferrer"
            className="patient-website"
          >
            {patient.website}
          </a>
        </div>
        <button
          className="expand-button"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          <svg
            className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      <div className={`patient-card-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="patient-details">
          <div className="detail-group">
            <span className="detail-label">Description:</span>
            <p className="detail-value">{patient.description}</p>
          </div>
          <div className="detail-group">
            <span className="detail-label">Created:</span>
            <p className="detail-value">{formatDate(patient.createdAt)}</p>
          </div>
          <div className="detail-group">
            <span className="detail-label">ID:</span>
            <p className="detail-value detail-id">{patient.id}</p>
          </div>
        </div>

        <div className="card-actions">
          <button className="action-btn edit-btn" onClick={handleEdit}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit
          </button>
          <button className="action-btn delete-btn" onClick={handleDelete}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
