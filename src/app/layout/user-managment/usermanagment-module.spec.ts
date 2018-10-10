import { UserManagmentModule } from './usermanagment.module';

describe('UserManagmentModule', () => {
  let userManagmentModule: UserManagmentModule;

  beforeEach(() => {
    userManagmentModule = new UserManagmentModule();
  });

  it('should create an instance', () => {
    expect(userManagmentModule).toBeTruthy();
  });
});
