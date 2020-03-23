import { checkForNewTurnipPrices } from "./utils";

SyncedCron.add({
    name: 'Check Reddit for new Turnip prices',
    schedule: (parser) => {
        return parser.text('every 1 minutes');
    },
    job: () => {
        return checkForNewTurnipPrices();
    }
})