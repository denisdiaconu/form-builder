import React from 'react'

type ResponseProps = {
  response: {
    id: string;
    createdAt: Date;
    respondentName: string | null;
    respondentEmail: string | null;
    answers: {
      id: string;
      text: string;
      question: {
        id: string;
        text: string;
        order: number;
      };
    }[];
  };
};

export default function FormResponse({ response }: ResponseProps) {
  return (
    <div>form-response</div>
  )
}
