export default function SectionLoader() {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-pulse flex space-x-4">
          <div className="h-12 w-12 bg-blue-200 rounded-full"></div>
          <div className="space-y-4">
            <div className="h-4 bg-blue-200 rounded w-36"></div>
            <div className="h-4 bg-blue-200 rounded w-24"></div>
          </div>
        </div>
      </div>
    );
  }