import {EventEmitter} from 'events'
import util from 'util'

class Gab {
	constructor() {
		EventEmitter.call(this);
	}
}

util.inherits(Gab, EventEmitter)

export default new Gab()
