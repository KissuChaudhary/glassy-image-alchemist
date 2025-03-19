import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wand2, Image, Clock, Upload, TrendingUp, BarChart3 } from 'lucide-react';

export default function DashboardContent() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to AI Image Editor</h1>
        <p className="text-gray-400">Transform your images with the power of AI</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 glass-panel neo-glow hover-lift">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-4">
              <Wand2 className="text-neon-blue" size={20} />
            </div>
            <h3 className="text-lg font-semibold">Quick Edit</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">Apply AI-powered enhancements to your images in one click.</p>
          <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:opacity-90 transition-opacity">
            Start Editing
          </Button>
        </Card>
        
        <Card className="p-6 glass-panel neo-glow hover-lift">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center mr-4">
              <Image className="text-neon-green" size={20} />
            </div>
            <h3 className="text-lg font-semibold">Recent Projects</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">Continue working on your recent image editing projects.</p>
          <Button variant="outline" className="w-full border-white/20 hover:bg-white/5">
            View Projects
          </Button>
        </Card>
        
        <Card className="p-6 glass-panel neo-glow hover-lift">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
              <Upload className="text-purple-500" size={20} />
            </div>
            <h3 className="text-lg font-semibold">Upload New</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">Upload a new image to start creating with our AI tools.</p>
          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity">
            Upload Image
          </Button>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 p-6 glass-panel">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Activity Overview</h3>
            <Button variant="outline" size="sm" className="border-white/20">
              <Clock className="mr-2 h-4 w-4" />
              Last 7 days
            </Button>
          </div>
          
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 size={48} className="mx-auto text-gray-500 mb-4" />
              <p className="text-gray-400">Your activity statistics will appear here</p>
            </div>
          </div>
        </Card>
        
        <Card className="col-span-1 p-6 glass-panel">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Quick Stats</h3>
            <TrendingUp size={20} className="text-neon-green" />
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-gray-400">Images Edited</span>
              <span className="font-semibold">48</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-gray-400">Storage Used</span>
              <span className="font-semibold">2.4 GB</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-gray-400">AI Credits</span>
              <span className="font-semibold">150</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <span className="text-gray-400">Pro Days Left</span>
              <span className="font-semibold">27</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
