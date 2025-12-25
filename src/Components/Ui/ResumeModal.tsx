import React, { useState } from 'react';
import { X, Download, FileText, FileType } from 'lucide-react';

interface ResumeOption {
  id: string;
  title: string;
  description: string;
  filePaths: {
    pdf: string;
    docx: string;
  };
}

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [selectedResume, setSelectedResume] = useState<string>('standard');

  const resumeOptions: ResumeOption[] = [
    {
      id: 'standard',
      title: 'Standard Resume',
      description: 'My complete professional resume with all skills and experience',
      filePaths: {
        pdf: '/MRIDHUL KRISHNA T K.pdf',
        docx: '/MRIDHUL KRISHNA T K.docx'
      }
    },
    {
      id: 'europass',
      title: 'Europass Resume',
      description: 'Highlighting technical skills and projects for developer roles',
      filePaths: {
        pdf: '/MRIDHUL KRISHNA T K EUROPASS DEV ENGLISH.pdf',
        docx: '/MRIDHUL KRISHNA T K EUROPASS DEV ENGLISH.docx'
      }
    },
    {
      id: 'one-page',
      title: 'One-Page Resume',
      description: 'Concise one-page version for quick review',
      filePaths: {
        pdf: '/MRIDHUL KRISHNA T K DJANGO INTERVIEW CV.pdf',
        docx: '/MRIDHUL KRISHNA T K DJANGO INTERVIEW CV.docx'
      }
    }
  ];

  const handleDownload = (format: 'pdf' | 'docx') => {
    const selectedOption = resumeOptions.find(option => option.id === selectedResume);
    if (selectedOption) {
      const link = document.createElement('a');
      link.href = selectedOption.filePaths[format];
      link.download = selectedOption.filePaths[format].split('/').pop() || `resume.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Download Resume</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Select a resume format and download</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X size={24} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Resume Options */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Choose Resume Version</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedResume(option.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedResume === option.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${
                      selectedResume === option.id
                        ? 'bg-blue-100 dark:bg-blue-800'
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      <FileText size={18} className={
                        selectedResume === option.id
                          ? 'text-blue-600 dark:text-blue-300'
                          : 'text-gray-600 dark:text-gray-400'
                      } />
                    </div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{option.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Download Options */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Download Format</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleDownload('pdf')}
                className="flex-1 flex items-center justify-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors group"
              >
                <div className="p-2 bg-red-100 dark:bg-red-800 rounded-lg">
                  <FileText size={20} className="text-red-600 dark:text-red-300" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-800 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-300">
                    Download as PDF
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Best for printing and sharing
                  </div>
                </div>
                <Download size={20} className="ml-auto text-red-600 dark:text-red-400" />
              </button>

              <button
                onClick={() => handleDownload('docx')}
                className="flex-1 flex items-center justify-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                  <FileType size={20} className="text-blue-600 dark:text-blue-300" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300">
                    Download as Word
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Editable document format
                  </div>
                </div>
                <Download size={20} className="ml-auto text-blue-600 dark:text-blue-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {resumeOptions.find(o => o.id === selectedResume)?.title} selected
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;