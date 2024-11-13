import {
    ActionIcon,
    useMantineColorScheme,
    useComputedColorScheme,
} from "@mantine/core";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import cx from "clsx";
import classes from "./switchTheme.module.css";
  
const SwitchTheme = () => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("light", {
      getInitialValueInEffect: true,
    });
  
    return (
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <RiSunLine className={cx(classes.icon, classes.light)} stroke={1.5} />
        <RiMoonLine className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    );
};
  
export default SwitchTheme