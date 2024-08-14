import React from 'react';

type MethodProps = {
  name: string;
  signature: string;
  description: string;
  params: { name: string; description: string }[];
  returnValue: string;
  example: string;
};

const Method: React.FC<MethodProps> = ({
  name,
  signature,
  description,
  params,
  returnValue,
  example,
}) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-2" id={name}>
      {name}
    </h3>
    <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto whitespace-pre-wrap break-words">
      <code>{signature}</code>
    </pre>
    <p className="mb-4">{description}</p>
    <h4 className="font-bold mb-2">Parameters:</h4>
    <ul className="list-disc pl-5 mb-4">
      {params.map((param, index) => (
        <li key={index} className="mb-1">
          <strong>{param.name}</strong>: {param.description}
        </li>
      ))}
    </ul>
    <p className="mb-4">
      <strong>Return value:</strong> {returnValue}
    </p>
    <h4 className="font-bold mb-2">Example:</h4>
    <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
      <code>{example}</code>
    </pre>
  </div>
);

const TableOfContents: React.FC<{ methods: string[] }> = ({ methods }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
    <ul className="list-disc pl-5">
      {methods.map((method, index) => (
        <li key={index} className="mb-2">
          <a href={`#${method}`} className="text-blue-600 hover:underline">
            {method}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const DocsPage: React.FC<{ methods: MethodProps[] }> = ({ methods }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">TypeSafeArray API Documentation</h1>
      <p className="mb-8 text-lg">
        TypeSafeArray is a type-safe utility library for array manipulation in TypeScript. This
        document describes the main methods of TypeSafeArray.
      </p>

      <TableOfContents methods={methods.map((m) => m.name)} />

      {methods.map((method, index) => (
        <Method key={index} {...method} />
      ))}
    </div>
  );
};

export default DocsPage;
