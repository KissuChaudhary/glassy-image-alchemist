
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';

const Gallery = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">My Gallery</h1>
        <p className="text-gray-400">This is where your images will be stored. Coming soon!</p>
      </div>
    </DashboardLayout>
  );
};

export default Gallery;
