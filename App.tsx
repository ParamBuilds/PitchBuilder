
import React from 'react';
import { PitchRuntime } from './components/pitch-runtime/PitchRuntime';
import { PitchRenderer } from './components/pitch-runtime/PitchRenderer';
import { PITCH_DECK } from './constants';
import { Navigation } from './components/ui/Navigation';

const App: React.FC = () => {
  return (
    <PitchRuntime>
      <main className="text-white bg-black">
        <PitchRenderer slides={PITCH_DECK} />
        <Navigation slides={PITCH_DECK} />
      </main>
    </PitchRuntime>
  );
};

export default App;
