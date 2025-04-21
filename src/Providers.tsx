import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";

export default function Providers({ children }: React.ComponentProps<any>) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
