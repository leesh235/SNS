import Editor from "react-avatar-editor";
import styled from "../../styles/theme-components";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Input = styled.input<{ scale: number }>`
    margin: 20px 0;
    width: 400px;
    -webkit-appearance: none;
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: 1px solid ${(props) => props.theme.color.lightGray};
        width: 18px;
        height: 18px;
        background-color: white;
        border-radius: 9px;
        box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
        cursor: pointer;
        margin-top: -7px;
    }
    ::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        width: 100%;
        height: 4px;
        background: ${(props) => `linear-gradient(
                    to right,
                    ${props.theme.color.seaBule} 0%,
                    ${props.theme.color.seaBule} ${props.scale}%,
                    ${props.theme.color.lightGray} ${props.scale}%,
                    ${props.theme.color.lightGray} 100%
                );`};
        border-radius: 2px;
    }
`;

const ControlBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.white};
    :hover {
        background-color: ${(props) => props.theme.color.gray};
    }
`;

interface Props {
    image: any;
    editorRef: any;
}

export const AvatarEditor = ({ image, editorRef }: Props) => {
    const [style, setStyle] = useState({
        color: [255, 255, 255, 0.6],
        scale: 1,
        rotate: 0,
        position: { x: 0.5, y: 0.5 },
        width: 300,
        height: 300,
        borderRadius: 150,
    });

    const handleScale: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.currentTarget;
        setStyle({ ...style, scale: parseFloat(value) });
    };

    const handlePosition = (position: any) => {
        setStyle({ ...style, position });
    };

    const handlePlus = () => {
        if (style.scale < 2) {
            setStyle({ ...style, scale: style.scale + 0.1 });
        }
    };

    const handleMinus = () => {
        if (style.scale > 1) {
            setStyle({ ...style, scale: style.scale - 0.1 });
        }
    };

    return (
        <Wrapper>
            <Editor
                ref={editorRef}
                image={image}
                width={style.width}
                height={style.height}
                color={style.color}
                borderRadius={style.borderRadius}
                position={style.position}
                scale={style.scale}
                rotate={style.rotate}
                onPositionChange={handlePosition}
                className="canvas"
            />
            <FlexWrapper>
                <ControlBtn onClick={handleMinus}>-</ControlBtn>
                <Input
                    scale={style.scale * 100 - 100}
                    type="range"
                    name="scale"
                    onChange={handleScale}
                    min={1}
                    max={2}
                    step={0.01}
                    defaultValue={1}
                />
                <ControlBtn onClick={handlePlus}>+</ControlBtn>
            </FlexWrapper>
        </Wrapper>
    );
};
