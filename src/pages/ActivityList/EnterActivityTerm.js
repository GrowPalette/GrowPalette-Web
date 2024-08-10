import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트
import BackButtonImg from "../../assets/images/JaeWoo/ActivityList/뒤로가기버튼.svg";
import { ReactComponent as DownArrow } from "../../assets/images/JaeWoo/ActivityList/TermDropDownArrow.svg";
import TermIcon from "../../assets/images/JaeWoo/ActivityList/TermIcon.svg";

const EnterActivityTerm = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isYearMenuOpen, setIsYearMenuOpen] = useState(false);
    const [isMonthMenuOpen, setIsMonthMenuOpen] = useState(false);
    const navigate = useNavigate(); // useNavigate 훅 사용

    const years = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - 10 + i);
    const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const generateDays = () => {
        const start = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        const end = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
        const days = [];
        
        for (let i = start.getDay(); i > 0; i--) {
            days.push(null);
        }

        for (let i = 1; i <= end.getDate(); i++) {
            days.push(i);
        }

        return days;
    };

    const handleYearButtonClick = () => {
        setIsYearMenuOpen(!isYearMenuOpen);
    };

    const handleMonthButtonClick = () => {
        setIsMonthMenuOpen(!isMonthMenuOpen);
    };

    const handleYearChange = (year) => {
        setSelectedDate(new Date(year, selectedDate.getMonth(), selectedDate.getDate()));
        setIsYearMenuOpen(false);
    };

    const handleMonthChange = (month) => {
        setSelectedDate(new Date(selectedDate.getFullYear(), months.indexOf(month), selectedDate.getDate()));
        setIsMonthMenuOpen(false);
    };

    const handleApplyClick = () => {
        navigate('/enter_activity'); // 버튼 클릭 시 이동
    };

    return (
        <Container>
            <LargeContainer>
                <BackButton onClick={() => window.history.back()}>
                    <img src={BackButtonImg} alt="뒤로가기 버튼"/>
                </BackButton>

                <TermContainer><img src={TermIcon} alt="기간 아이콘"/></TermContainer>

                <Calendar>
                    <Header>
                        <Dropdown>
                            <DropdownButton onClick={handleYearButtonClick}>
                                {selectedDate.getFullYear()}
                                <DownArrow />
                            </DropdownButton>
                            {isYearMenuOpen && (
                                <DropdownMenu>
                                    {years.map(year => (
                                        <DropdownItem key={year} onClick={() => handleYearChange(year)}>
                                            {year}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            )}
                        </Dropdown>
                        <Dropdown>
                            <DropdownButton onClick={handleMonthButtonClick}>
                                {months[selectedDate.getMonth()]}
                                <DownArrow />
                            </DropdownButton>
                            {isMonthMenuOpen && (
                                <DropdownMenu>
                                    {months.map(month => (
                                        <DropdownItem key={month} onClick={() => handleMonthChange(month)}>
                                            {month}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            )}
                        </Dropdown>
                    </Header>
                    <Separator />
                    <Weekdays>
                        {["일", "월", "화", "수", "목", "금", "토"].map(day => (
                            <Weekday key={day}>{day}</Weekday>
                        ))}
                    </Weekdays>
                    <Dates>
                        {generateDays().map((day, index) => (
                            day ? (
                                <DateBox
                                    key={index}
                                    selected={day === selectedDate.getDate()}
                                    onClick={() => handleDateClick(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
                                >
                                    {day}
                                </DateBox>
                            ) : (
                                <DateBox key={index} />
                            )
                        ))}
                    </Dates>
                </Calendar>

            </LargeContainer>
            <ApplyButton onClick={handleApplyClick}>
                적용
            </ApplyButton>
        </Container>
    );
};

export default EnterActivityTerm;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LargeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 21.375rem;
    padding-top: 1.5rem;
    gap: 3rem;
`;

const BackButton = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer; /* 클릭 가능한 커서 */
`;

const Calendar = styled.div`
    width: 21.375rem;
    height: 20.0625rem;
    flex-shrink: 0;
    border-radius: 1rem;
    background: #FFF;
    box-shadow: 8px 3px 22px 10px rgba(150, 150, 150, 0.11);
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
`;

const Dropdown = styled.div`
    position: relative;
`;

const DropdownButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    width: 3.9rem;
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background: #FFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const DropdownItem = styled.div`
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
        background: #f0f0f0;
    }
`;

const Separator = styled.div`
    width: 100%;
    height: 0.05rem;
    background: #6F6F6F;
    margin: 0.5rem 0;
`;

const Weekdays = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    gap: 1.5rem;
`;

const Weekday = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 0.25rem;
    color: rgba(111, 111, 111, 1);
`;

const Dates = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1.3rem;
`;

const DateBox = styled.div`
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    justify-content: center;
    align-items: center;
    color: ${props => props.selected ? '#FFF' : '#000'};
    background-color: ${props => props.selected ? 'var(--Blue-500, #9FC7C0)' : 'transparent'};
    text-align: center;
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 50%; /* 원형 형태로 만들기 */
`;

const TermContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; /* 중앙 정렬 */
`;

const ApplyButton = styled.div`
    display: flex;
    width: 21.375rem;
    height: 3.5rem;
    padding: 0.875rem 4.25rem;
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
    margin-top: 70%;
    cursor: pointer; /* 클릭 가능한 커서 */
`