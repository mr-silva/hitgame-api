export abstract class ViewContract<TDomainEntity, TResponseView> {
  abstract render(entity: TDomainEntity): TResponseView

  public renderMany(entities: TDomainEntity[]): TResponseView[] {
    return entities.map(entity => this.render(entity))
  }
}
