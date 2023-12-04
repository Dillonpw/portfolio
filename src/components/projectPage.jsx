import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { projectId } = useParams();

  // A function to render content based on the projectId
  const renderContent = () => {
    switch (projectId) {
      case 'cv-template':
        return <div>This is the CV Template Project</div>;
      // Add more cases here for different projectIds
      default:
        return <div>Default project content or error message</div>;
    }
  };

  return (
    <div>
      Project Page for {projectId}
      {renderContent()} {/* This will display content based on projectId */}
    </div>
  );
};

export default ProjectPage;
