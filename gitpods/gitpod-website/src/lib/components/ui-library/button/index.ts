import ButtonComponent from './button.svelte';
import type { Button as ButtonType } from './button';
const Button = ButtonComponent as typeof ButtonType;
export default Button;
