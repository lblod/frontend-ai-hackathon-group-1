import Application from 'frontend-ai-hackathon-group-1/app';
import config from 'frontend-ai-hackathon-group-1/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
