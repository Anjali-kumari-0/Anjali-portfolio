import { projectComponentData } from '@/Constant'
import { useNavigate } from 'react-router';

const ProjectSidebar = ({ selected, onSelectCategory }: { selected: string, onSelectCategory: (category: string) => void }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-4 w-64 p-4 border-r border-gray-200'>
      {projectComponentData.map((category) => (
        <div key={category.href} onClick={() => {
          console.log("Category clicked:", category.href);
          // onSelectCategory(category.href ?? "");
          navigate(`#${category.href}`)
        }} className={`${selected === category.href ? "font-bold bg-gray-700" : "app-text-primary"} z-10 cursor-pointer hover:text-portfolio-blue transition-colors`}>
          {category.title}
        </div>
      ))}
    </div>
  )
}

export default ProjectSidebar