import { prop, getModelForClass } from '@typegoose/typegoose';

export class SuggestionModel {
  @prop({ required: true })
  public artist!: { name: string; song: string };
  @prop({ required: false })
  public submitter!: { name: string };
}

export const suggestionsRepository = getModelForClass(SuggestionModel);
