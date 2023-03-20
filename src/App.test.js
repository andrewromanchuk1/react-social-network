import { render } from "react-dom";
import { unmountComponentAtNode } from "react-dom";
import MainApp from "./App";

it('renders without crashing', () => {
   const div = document.createElement('div');
   render(<MainApp/>, div);
   unmountComponentAtNode(div);
})