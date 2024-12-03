import { FC } from 'react';
import { Eye, Calendar } from 'lucide-react';

interface HeadtitleProps {
  countnews: number | string;
  datenews: string;
}

const Headtitle: FC<HeadtitleProps> = ({ countnews, datenews }) => {
  return (
    <div className="bg-white p-4 shadow-sm rounded-md flex justify-between">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-gray-600">
          <Eye className="w-4 h-4" />
          <span className="text-sm">{countnews}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{datenews}</span>
        </div>
      </div>
    </div>
  );
};

export default Headtitle;