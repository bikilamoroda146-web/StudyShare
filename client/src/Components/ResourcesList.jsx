import Abc from "./Abc";

export default function ResourcesList({ resources }) {
  return (
    <div className="space-y-6">
      {resources.length > 0 ? (
        resources.map((res, index) => (
          <Abc key={index} {...res} />
        ))
      ) : (
        <p className="text-gray-500">No resources found.</p>
      )}
    </div>
  );
}
