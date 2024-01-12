
import { createRoot } from 'react-dom/client';
import './ui.css'

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

const root = createRoot(document.getElementById('navigation') as HTMLElement); 
root?.render(<NavigationBar />);