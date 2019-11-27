import { prop, getModelForClass } from '@typegoose/typegoose';

export class SuggestionModel {
  @prop({ required: false })
  public artist!: { name: string; song: string };
  @prop({ required: true })
  public submitter!: { name: string };
  @prop({ required: true })
  public url!: string;
}

export const suggestionsRepository = getModelForClass(SuggestionModel);
