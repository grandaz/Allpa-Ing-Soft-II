'use client';

import { Progress } from 'flowbite-react';

export default function ProgressBar() {
  return (
    <Progress
      labelProgress
      labelText
      progress={45}
      progressLabelPosition="inside"
      size="lg"
      textLabel="Progreso"
      textLabelPosition="outside"
    />
  )
}


