import { Page } from "../layout";
import { NationalWeatherServiceAlerts } from "features";
import { ALERT_TYPES } from "services/nws_api_web_service/config";

const HomeScreen = () => {
	return (
		<Page>
			<NationalWeatherServiceAlerts alertType={ALERT_TYPES.tornadoWarning} />
			<NationalWeatherServiceAlerts alertType={ALERT_TYPES.tornadoWatch} />
		</Page>
	);
};

export default HomeScreen;
