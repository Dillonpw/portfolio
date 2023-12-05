import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { projectId } = useParams();

  // A function to render content based on the projectId
  const renderContent = () => {
    switch (projectId) {
      case 'cv-template':
        return <div>This is the CV Template Page</div>;
        case 'schedule-app':
          return <div>This is the schedule app page</div>;
      // Add more cases here for different projectIds
      default:
        return <div>Oops! there's nothing here...</div>;
    }
  };

  return (
    <div>
      Project Page for {projectId}
      {renderContent()} {}
    </div>
  );
};

export default ProjectPage;
