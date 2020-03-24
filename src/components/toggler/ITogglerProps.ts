export interface ITogglerProps {
    leftLabel: string;
    rightLabel: string;
    title: string;
    toggle: boolean;
    onChange: () => void;
    idLeft: string;
    idRight: string;
    name: string;
}
