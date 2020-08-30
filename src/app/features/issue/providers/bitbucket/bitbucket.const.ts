import {ConfigFormSection, LimitedFormlyFieldConfig} from '../../../config/global-config.model';
import {T} from '../../../../t.const';
import {BitbucketCfg} from './bitbucket';

export const DEFAULT_BITBUCKET_CFG: BitbucketCfg = {
  project: null,
  token: null,
};

export const BITBUCKET_CREDENTIALS_FORM_CFG: LimitedFormlyFieldConfig<BitbucketCfg>[] = [
  {
    key: 'project',
    type: 'input',
    templateOptions: {
      required: true,
      label: T.F.JIRA.FORM_CRED.USER_NAME,
    },
  },
  {
    key: 'token',
    type: 'input',
    templateOptions: {
      required: true,
      label: T.F.JIRA.FORM_CRED.PASSWORD,
      type: 'password',
      description: '* https://confluence.atlassian.com/cloud/api-tokens-938839638.html'
    },
  },
];

export const BITBUCKET_CONFIG_FORM: LimitedFormlyFieldConfig<BitbucketCfg>[] = [
  {
    key: 'project',
    type: 'input',
    templateOptions: {
      label: T.F.GITLAB.FORM.PROJECT,
      type: 'text',
      pattern: /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b\/)((\w-?|\.-?)+((\/|%2F)(\w-?|\.-?)+)+$)|(^(\w-?|\.-?)+((\/|%2F)(\w-?|\.-?)+)+$)/i,
    },
  },
  {
    key: 'token',
    type: 'input',
    templateOptions: {
      label: T.F.GITLAB.FORM.TOKEN,
    },
    validation: {
      show: true,
    },
    expressionProperties: {
      // !! is used to get the associated boolean value of a non boolean value
      // It's not a fancy trick using model.project alone gets the required case right but won't remove it
      // if the project field is empty so this is needed for the wanted behavior
      'templateOptions.required': '!!model.project',
    },
  },
];

export const BITBUCKET_CONFIG_FORM_SECTION: ConfigFormSection<BitbucketCfg> = {
  title: 'Bitbucket',
  key: 'BITBUCKET',
  items: BITBUCKET_CONFIG_FORM
};
