import React, { useState } from "react";
import PrimaryButton from "../../button/PrimaryButton";

const mockData = {
  categories: [
    {
      name: "Sports",
      fields: [
        {
          type: "select",
          label: "Sport",
          options: ["Soccer", "Basketball", "Tennis"],
        },
        {
          type: "select",
          label: "Game",
          options: ["Liverpool vs Manchester City", "Chelsea vs Arsenal"],
        },
        {
          type: "input",
          label: "Bet Title",
          defaultValue: "Will Liverpool win?",
        },
      ],
    },
    {
      name: "Music",
      fields: [
        {
          type: "select",
          label: "Campion",
          options: ["2024 Male Campion", "2024 Female Campion"],
        },
        {
          type: "input",
          label: "Question",
          defaultValue: "Will singer A win?",
        },
      ],
    },
  ],
};

type Field = {
  type: "select" | "input";
  label: string;
  options?: string[]; // For select fields
  defaultValue?: string; // For input fields
};

type Category = {
  name: string;
  fields: Field[];
};

const CreateBetModalContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    mockData.categories[0].name
  );
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleFieldChange = (fieldLabel: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldLabel]: value,
    }));
  };

  const currentCategory = mockData.categories.find(
    (category) => category.name === selectedCategory
  );

  return (
    <div>
      <h2 className="mb-6 font-bold text-3xl text-white">Create Bet</h2>

      {/* Category Dropdown */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-200">
          Category
        </label>
        <select
          className="border-gray-500 bg-stone-800 p-2 border rounded-xl w-full text-white"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {mockData.categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {currentCategory?.fields.map((field) => (
        <div className="mb-4" key={field.label}>
          <label className="block mb-2 font-semibold text-gray-200">
            {field.label}
          </label>
          {field.type === "select" && field.options ? (
            <select
              className="border-gray-500 bg-stone-800 p-2 border rounded-xl w-full text-white"
              value={formValues[field.label] || ""}
              onChange={(e) => handleFieldChange(field.label, e.target.value)}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === "input" ? (
            <input
              type="text"
              className="border-gray-500 bg-stone-800 p-2 border rounded-xl w-full text-white"
              value={formValues[field.label] || field.defaultValue || ""}
              onChange={(e) => handleFieldChange(field.label, e.target.value)}
            />
          ) : null}
        </div>
      ))}

      {/* Fees Section */}
      <div className="border-stone-700 py-4 border-t">
        <div className="flex justify-between mb-2 text-gray-400">
          <span>Network Fee</span>
          <span>0.57 ADA</span>
        </div>
        <div className="flex justify-between mb-2 text-gray-400">
          <span>Platform Fee</span>
          <span>0.23 ADA</span>
        </div>
        <div className="flex justify-between mb-2 text-gray-400">
          <span>Refundable Security Deposit</span>
          <span>200 ADA</span>
        </div>
        <div className="flex justify-between font-bold text-white">
          <span>Total Fees</span>
          <span>200.8 ADA</span>
        </div>
      </div>

      <PrimaryButton classNames="bg-orange-500 mt-4 p-6 rounded-full w-full text-white">
        Create Bet
      </PrimaryButton>
    </div>
  );
};

export default CreateBetModalContent;
