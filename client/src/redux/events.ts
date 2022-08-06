export namespace Room {
  export enum On {
    Create = "room create",
    CreateMessage = "room message create",
    Enter = "room enter",
    GetMessages = "room messages get",
    GetUsers = "room users get",
    Leave = "room leave",
    SetActive = "room set active"
  }

  export enum Emit {
    Create = "room:create",
    CreateMessage = "room:message:create",
    Enter = "room:enter",
    GetMessages = "room:messages:get",
    GetUsers = "room:users:get",
    Leave = "room:leave",
    SetActive = "room:set:active"
  }
}
