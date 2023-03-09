import { useState } from "react";
import styled from "styled-components";

export default function Seat({ id, name, isAvailable, arrayAssentos }) {
  const [seat, setSeat] = useState(isAvailable ? "available" : "taken");
  function seatClick(id, assento) {
    if (seat === "taken") {
      alert("Esse assento não está disponível");
      return;
    } else if (seat === "selected") {
      setSeat("available");
      arrayAssentos(2, id, assento);
      return;
    }
    setSeat("selected");
    arrayAssentos(1, id, assento);
  }

  return (
    <SeatContainer
      data-test="seat"
      onClick={() => seatClick(id, name)}
      status={seat}
    >
      {name}
    </SeatContainer>
  );
}

const SeatContainer = styled.div`
  border: ${({ status }) =>
    status === "selected"
      ? "1px solid #0E7D71"
      : status === "available"
      ? "1px solid #7B8B99"
      : "1px solid #F7C52B"};
  background-color: ${({ status }) =>
    status === "selected"
      ? "#1AAE9E"
      : status === "available"
      ? "#C3CFD9"
      : "#FBE192"};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
  cursor: ${({ status }) => (status === "taken" ? "" : "pointer")};
`;
