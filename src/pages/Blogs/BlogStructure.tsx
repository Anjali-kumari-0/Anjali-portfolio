import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

interface BlogType {
  title: string;
  steps: {
    title: string;
    stepsDes:  React.ReactNode;
    des?: string;
  }[];
}

type Props = {
  blog: BlogType;
};

const BlogStructure = ({ blog }: Props) => {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 font-inter">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
        {blog.title}
      </h1>

      {/* Steps */}
      <div className="space-y-8">
        {blog.steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
          >
            {/* Step Heading */}
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <h2 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h2>
            </div>

            {/* Steps Description */}
            <div className="text-gray-700 pl-1 mb-3">{step.stepsDes}</div>

            {/* Extra Description */}
            {step.des && (
              <p className="text-gray-600 bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
                <ArrowRight className="inline w-4 h-4 mr-1 text-blue-500" />
                {step.des}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogStructure;
