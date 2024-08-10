import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackButtonImg from "../../assets/images/JaeWoo/ActivityList/뒤로가기버튼.svg";
import BoldIcon from "../../assets/images/JaeWoo/ActivityList/BoldIcon.svg";
import UnderlineIcon from "../../assets/images/JaeWoo/ActivityList/UnderlineIcon.svg";
import StrikethroughIcon from "../../assets/images/JaeWoo/ActivityList/StrikethroughIcon.svg";

const EnterActivityDetail = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [typingValue, setTypingValue] = useState('');
    const [format, setFormat] = useState({
        bold: false,
        underline: false,
        strikethrough: false,
    });
    const textAreaRef = useRef(null);

    const handleCancelButtonClick = () => {
        navigate(-1);
    };

    const handleUploadButtonClick = () => {
        navigate('/activity_list');
    };

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    const handleFormatToggle = (formatType) => {
        setFormat((prevFormat) => ({
            ...prevFormat,
            [formatType]: !prevFormat[formatType],
        }));
    };

    const applyFormatting = (command, value = null) => {
        document.execCommand(command, false, value);
    };

    const handleFormatChange = (formatType) => {
        const command = {
            bold: 'bold',
            underline: 'underline',
            strikethrough: 'strikeThrough'
        }[formatType];

        applyFormatting(command);
        handleFormatToggle(formatType);
    };

    return (
        <Container>
            <LargeContainer>
                <BackButton onClick={handleBackButtonClick}>
                    <img src={BackButtonImg} alt="뒤로가기 버튼"/>
                </BackButton>

                <SeperateLine/>

                <ContentContainer>
                    <Title 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="제목을 입력하세요"
                    />
                    <EnterTextType>
                        <FormatIconBold
                            src={BoldIcon} 
                            alt="Bold"
                            isActive={format.bold}
                            onClick={() => handleFormatChange('bold')}
                        />
                        <FormatIconUnderline
                            src={UnderlineIcon} 
                            alt="Underline"
                            isActive={format.underline}
                            onClick={() => handleFormatChange('underline')}
                        />
                        <FormatIconStrike
                            src={StrikethroughIcon} 
                            alt="Strikethrough"
                            isActive={format.strikethrough}
                            onClick={() => handleFormatChange('strikethrough')}
                        />
                    </EnterTextType>

                    <SeperateLine/>

                    <TypingField 
                        ref={textAreaRef}
                        contentEditable
                        suppressContentEditableWarning
                        placeholder="내용을 입력하세요"
                        dangerouslySetInnerHTML={{ __html: typingValue }}
                    />
                </ContentContainer>

                <ButtonContainerRow>
                    <CancelButton onClick={handleCancelButtonClick}>
                        취소
                    </CancelButton>
                    <UploadButton onClick={handleUploadButtonClick}>
                        업로드
                    </UploadButton>
                </ButtonContainerRow>
            </LargeContainer>
        </Container>
    );
};

export default EnterActivityDetail;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const LargeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 21.375rem;
    padding-top: 1.5rem;
    gap: 1rem;
`;

const BackButton = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
`;

const Title = styled.input`
    color: var(--Black, #000);
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    border-bottom: 1px solid var(--Gray-300, #CCC);
    padding: 0.5rem 0;
    outline: none;
    margin-bottom: 1rem;

    ::placeholder {
        color: var(--Gray-400, #999);
    }
`;

const EnterTextType = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: flex-start;
    align-items: center;
`;

const FormatIconBold = styled.img`
    width: 1.5rem;
    height: 1.4rem;
    cursor: pointer;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
    background-color: ${({ isActive }) => (isActive ? '#007BFF' : 'transparent')}; /* 파란색 배경 */
    border-radius: 0.25rem; /* 둥근 모서리 */
    padding: 0.25rem;

    &:hover {
        opacity: 0.8;
    }
`;

const FormatIconUnderline = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
    background-color: ${({ isActive }) => (isActive ? '#007BFF' : 'transparent')}; /* 파란색 배경 */
    border-radius: 0.25rem; /* 둥근 모서리 */
    padding: 0.25rem;

    &:hover {
        opacity: 0.8;
    }
`;

const FormatIconStrike = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
    background-color: ${({ isActive }) => (isActive ? '#007BFF' : 'transparent')}; /* 파란색 배경 */
    border-radius: 0.25rem; /* 둥근 모서리 */
    padding: 0.25rem;

    &:hover {
        opacity: 0.8;
    }
`;

const TypingField = styled.div`
    width: 100%;
    min-height: 32rem;
    color: var(--Black, #000);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid var(--Gray-300, #CCC);
    border-radius: 0.25rem;
    padding: 0.5rem;
    resize: vertical;

    ::placeholder {
        color: var(--Gray-400, #999);
    }
`;

const ButtonContainerRow = styled.div`
    display: flex;
    margin-bottom: 2rem;
    justify-content: space-between;
`;

const CancelButton = styled.div`
    display: flex;
    width: 10.375rem;
    height: 2.9375rem;
    padding: 0.875rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    border: 0.5px solid var(--Gray-900, #222);
    color: var(--Gray-900, #222);
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;

const UploadButton = styled.div`
    display: flex;
    width: 10.375rem;
    height: 2.9375rem;
    padding: 0.875rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    background: var(--Gray-900, #222);
    color: var(--White, #FFF);
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;

const SeperateLine = styled.div`
    width: 21.375rem;
    height: 0.03125rem;
    flex-shrink: 0;
    background: var(--White, #FFF);
`;