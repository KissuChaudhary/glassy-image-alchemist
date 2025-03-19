
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import ImageEditor from "@/components/ImageEditor";

const Create = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Create New</h1>
        <p className="text-gray-400">Start creating with AI. Coming soon!</p>
        <div className="max-w-6xl mx-auto">
              <ImageEditor />
            </div>
      </div>
    </DashboardLayout>
  );
};

export default Create;
