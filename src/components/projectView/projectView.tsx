import React, { useEffect, useState } from 'react'
import ProjectSidebar from './ProjectSidebar';
import { useLocation } from 'react-router-dom';
import ProjectDetails from './ProDetailsView';

const ProjectView = () => {

    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const hash = location.hash; // "#custom-component-project"

        const id = hash.replace("#", ""); // "custom-component-project"

        setSelectedCategory(id);
    }, [location]);
    const selectedCategoryView = (category: string) => {
        if(!category) return <div className="p-6 text-gray-500">Under Construction: Please Select another project to view details</div>;
        return <ProjectDetails id={category} />;
    }
    return (
        <div className='flex w-full '>
            <ProjectSidebar selected={selectedCategory} onSelectCategory={setSelectedCategory} />
            <div className="w-[80%]">
                {selectedCategoryView(selectedCategory)}
            </div>

        </div>
    )
}

export default ProjectView