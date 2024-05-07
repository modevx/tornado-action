import { Card } from "react-daisyui";

import {
  AlertMessageButtons,
  AlertMessageModal,
  AlertPolygonMap,
  Body,
  Description,
  Instruction,
  ExpirationTime,
  ImpactedAreas,
  MaxHailSize,
  SenderName,
  CardTitle,
  TornadoDetection,
} from "./AlertCardElements";

import { SITUATIONS } from "services/nws-api-web-service";

import { checkStringForPhrase } from "utils";

// TODO: add special messaging for TORNADO EMERGENCY & PARTICULARLY DANGEROUS SITUATION alerts

export const TornadoWarningAlert = ({ alert }) => {
  const { id, type, geometry, properties } = alert;
  const alertFeature = { id, type, geometry };
  const {
    areaDesc,
    description,
    effective,
    expires,
    instruction,
    senderName,

    // ! all parameter values in []
    parameters: { maxHailSize, tornadoDetection },
  } = properties;

  const isTornadoEmergency = checkStringForPhrase(
    description,
    SITUATIONS.tornado_emergency
  );

  const isPDS = checkStringForPhrase(
    description,
    SITUATIONS.particularly_dangerous_situation
  );

  const bgColor = isTornadoEmergency ? "#651fff" : isPDS ? "#f0f" : "red";

  return (
    <Card
      style={{ backgroundColor: `${bgColor}` }}
      className="p-2"
      // className="bg-gradient-to-br from-red-500 to-red-800 p-2"
    >
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <div className="flex justify-between">
          <TornadoDetection tornadoDetection={tornadoDetection} />
          <div className="mx-2" />
          <ExpirationTime expiresTime={expires} />
        </div>
        {/* <MaxHailSize maxHailSize={maxHailSize} /> */}
        {/* <AlertPolygonMap alertFeature={alert} /> */}
        <ImpactedAreas areaDesc={areaDesc} />
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};

export const TornadoWatchAlert = ({ alert }) => {
  const { properties } = alert;
  const { areaDesc, effective, expires, senderName, description, instruction } =
    properties;

  const isPDS = checkStringForPhrase(
    description,
    SITUATIONS.particularly_dangerous_situation
  );

  const bgColor = isPDS ? "#f0f" : "yellow";

  return (
    <Card style={{ backgroundColor: `${bgColor}` }} className="p-2">
      {/* className="bg-gradient-to-br from-yellow-300 to-yellow-600 p-2"> */}
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <ExpirationTime expiresTime={expires} />
        <ImpactedAreas areaDesc={areaDesc} />
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};

export const SevereStormWarningAlert = ({ alert }) => {
  const { id, type, geometry, properties } = alert;

  const { areaDesc, effective, expires, senderName, description, instruction } =
    alert?.properties;

  const isPDS = checkStringForPhrase(
    description,
    SITUATIONS.particularly_dangerous_situation
  );

  const bgColor = isPDS ? "#f0f" : "orange";

  return (
    <Card
      style={{ backgroundColor: `${bgColor}` }}
      className="p-2"
      // className="bg-gradient-to-br from-orange-400 to-orange-600 p-2"
    >
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <ExpirationTime expiresTime={expires} />
        <ImpactedAreas areaDesc={areaDesc} />
        {/* <AlertPolygonMap alertFeature={alert} /> */}
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};

export const SevereStormWatchAlert = ({ alert }) => {
  const { properties } = alert;
  const { areaDesc, effective, expires, senderName, description, instruction } =
    properties;

  return (
    <Card className="bg-gradient-to-br from-green-400 to-green-700 p-2">
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <ExpirationTime expiresTime={expires} />
        <ImpactedAreas areaDesc={areaDesc} />
        {/* <p>{instruction}</p> */}
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};
