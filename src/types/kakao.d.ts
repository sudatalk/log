/**
 * Kakao JavaScript SDK — ambient typings aligned with official JSDoc reference.
 * @see https://developers.kakao.com/sdk/reference/js/release/index.html
 */

declare namespace Kakao {
  /** @see https://developers.kakao.com/sdk/reference/js/release/Kakao.html#KakaoError */
  interface KakaoError {
    name: string;
    message: string;
  }

  const VERSION: string;
  function cleanup(): void;
  function init(appKey: string): void;
  function isInitialized(): boolean;

  namespace Auth {
    interface AuthorizeSettings {
      redirectUri: string;
      state?: string;
      scope?: string;
      prompt?: string;
      loginHint?: string;
      nonce?: string;
      /** @default true */
      throughTalk?: boolean;
    }

    interface AuthError {
      error: {
        code: number;
        msg: string;
      };
    }

    interface LogoutResponse {
      userInfo: {
        id: number;
      };
    }

    interface ShippingAddressSettings {
      /** @default false */
      forceMobileLayout?: boolean;
      /** @default true */
      enableBackButton?: boolean;
    }

    interface ShippingAddressResponse {
      response: {
        address_id: number;
        status: "success";
      };
    }

    interface ShippingAddressError {
      error: {
        error_code: string;
        error_msg: string;
        status: "error";
      };
    }

    interface StatusResponse {
      statusInfo: {
        status: "connected" | "not_connected" | string;
        user?: object;
      };
    }

    function authorize(settings: AuthorizeSettings): void;
    function cleanup(): void;
    function getAccessToken(): string;
    function getAppKey(): string;
    function getStatusInfo(): Promise<StatusResponse | AuthError>;
    function logout(): Promise<LogoutResponse | AuthError>;
    function selectShippingAddress(
      settings: ShippingAddressSettings,
    ): Promise<ShippingAddressResponse | ShippingAddressError>;
    /** @param persist Whether to persist in `sessionStorage`. @default true */
    function setAccessToken(token: string, persist?: boolean): void;
  }

  namespace API {
    interface RequestSettings {
      url: string;
      data?: object;
      files?: FileList | File[];
    }

    function cleanup(): void;
    function request(settings: RequestSettings): Promise<unknown>;
  }

  namespace Share {
    type ContainerSelector = string | HTMLElement;

    interface LinkObject {
      webUrl?: string;
      mobileWebUrl?: string;
      androidExecutionParams?: string;
      iosExecutionParams?: string;
    }

    interface ButtonObject {
      title: string;
      link: LinkObject;
    }

    interface ContentObject {
      title?: string;
      imageUrl?: string;
      link?: LinkObject;
      imageWidth?: number;
      imageHeight?: number;
      description?: string;
    }

    interface CommerceObject {
      regularPrice: number;
      discountPrice?: number;
      discountRate?: number;
      fixedDiscountPrice?: number;
      /** @default "원" */
      currencyUnit?: string;
      /** @default 0 */
      currencyUnitPosition?: number;
      productName?: string;
    }

    interface SocialObject {
      likeCount?: number;
      commentCount?: number;
      sharedCount?: number;
      viewCount?: number;
      subscriberCount?: number;
    }

    interface ItemObject {
      item: string;
      itemOp: string;
    }

    interface ItemContentObject {
      profileText?: string;
      profileImageUrl?: string;
      titleImageText?: string;
      titleImageUrl?: string;
      titleImageCategory?: string;
      items?: ItemObject[];
      sum?: string;
      sumOp?: string;
    }

    interface DefaultFeedSettings {
      objectType: "feed";
      content: ContentObject;
      itemContent?: ItemContentObject;
      social?: SocialObject;
      buttonTitle?: string;
      buttons?: ButtonObject[];
      /** @default false */
      installTalk?: boolean;
      serverCallbackArgs?: Record<string, unknown> | string;
    }

    interface DefaultListSettings {
      objectType: "list";
      headerTitle: string;
      headerLink: LinkObject;
      contents: ContentObject[];
      buttonTitle?: string;
      buttons?: ButtonObject[];
      /** @default false */
      installTalk?: boolean;
      serverCallbackArgs?: Record<string, unknown> | string;
    }

    interface DefaultLocationSettings {
      objectType: "location";
      content: ContentObject;
      address: string;
      addressTitle?: string;
      social?: SocialObject;
      buttonTitle?: string;
      buttons?: ButtonObject[];
      /** @default false */
      installTalk?: boolean;
      serverCallbackArgs?: Record<string, unknown> | string;
    }

    interface DefaultCommerceSettings {
      objectType: "commerce";
      content: ContentObject;
      commerce: CommerceObject;
      buttonTitle?: string;
      buttons?: ButtonObject[];
      /** @default false */
      installTalk?: boolean;
      serverCallbackArgs?: Record<string, unknown> | string;
    }

    interface DefaultCalendarSettings {
      objectType: "calendar";
      idType: string;
      id: string;
      content: ContentObject;
      buttons?: ButtonObject[];
      /** @default false */
      installTalk?: boolean;
      serverCallbackArgs?: Record<string, unknown> | string;
    }

    interface DefaultTextSettings {
      objectType: "text";
      text: string;
      link: LinkObject;
      buttonTitle?: string;
      buttons?: ButtonObject[];
      /** @default false */
      installTalk?: boolean;
      serverCallbackArgs?: Record<string, unknown> | string;
    }

    type DefaultTemplateSettings =
      | DefaultFeedSettings
      | DefaultListSettings
      | DefaultLocationSettings
      | DefaultCommerceSettings
      | DefaultCalendarSettings
      | DefaultTextSettings;

    interface CustomTemplateSettings {
      templateId: number;
      templateArgs?: object;
      /** @default false */
      installTalk?: boolean;
      serverCallbackArgs?: Record<string, unknown> | string;
    }

    interface CreateCustomButtonSettings extends CustomTemplateSettings {
      container: ContainerSelector;
    }

    interface CreateScrapButtonSettings {
      container: ContainerSelector;
      requestUrl: string;
      templateId?: number;
      templateArgs?: object;
      /** @default false */
      installTalk?: boolean;
      serverCallbackArgs?: Record<string, unknown> | string;
    }

    interface ScrapSendSettings {
      requestUrl: string;
      templateId?: number;
      templateArgs?: object;
      /** @default false */
      installTalk?: boolean;
      serverCallbackArgs?: Record<string, unknown> | string;
    }

    interface ImageInfos {
      original: {
        url: string;
        length: number;
        content_type: string;
        width: number;
        height: number;
      };
    }

    function cleanup(): void;
    function createCustomButton(settings: CreateCustomButtonSettings): void;
    function createDefaultButton(settings: {
      container: ContainerSelector;
    }): void;
    function createScrapButton(settings: CreateScrapButtonSettings): void;
    function deleteImage(settings: { imageUrl: string }): Promise<unknown>;
    function scrapImage(settings: { imageUrl: string }): Promise<ImageInfos>;
    function sendCustom(settings: CustomTemplateSettings): void;
    function sendDefault(settings: DefaultTemplateSettings): void;
    function sendScrap(settings: ScrapSendSettings): void;
    function uploadImage(settings: { file: FileList }): Promise<ImageInfos>;
  }

  namespace Channel {
    interface ChannelPublicIdSettings {
      channelPublicId: string;
    }

    interface FollowChannelResponse {
      response: {
        status: "success" | "fail" | string;
        channel_public_id: string;
      };
    }

    interface FollowChannelError {
      error: {
        error_code: string;
        error_msg: string;
        status: "error";
      };
    }

    interface CreateAddChannelButtonSettings extends ChannelPublicIdSettings {
      container: Share.ContainerSelector;
      /** @default "small" */
      size?: "small" | "large" | string;
      /** @default false */
      supportMultipleDensities?: boolean;
    }

    interface CreateChatButtonSettings extends ChannelPublicIdSettings {
      container: Share.ContainerSelector;
      /** @default "consult" */
      title?: "consult" | "question" | string;
      /** @default "small" */
      size?: "small" | "large" | string;
      /** @default "yellow" */
      color?: "yellow" | "black" | string;
      /** @default "pc" */
      shape?: "pc" | "mobile" | string;
      /** @default false */
      supportMultipleDensities?: boolean;
    }

    function addChannel(settings: ChannelPublicIdSettings): void;
    function chat(settings: ChannelPublicIdSettings): void;
    function cleanup(): void;
    function createAddChannelButton(settings: CreateAddChannelButtonSettings): void;
    function createChatButton(settings: CreateChatButtonSettings): void;
    function followChannel(
      settings: ChannelPublicIdSettings,
    ): Promise<FollowChannelResponse | FollowChannelError>;
  }

  namespace Navi {
    interface ShareSettings {
      name: string;
      x: number;
      y: number;
      /** @default "katec" */
      coordType?: "wgs84" | "katec" | string;
    }

    interface ViaPoint {
      name: string;
      x: number;
      y: number;
    }

    interface StartSettings extends ShareSettings {
      /** @default 1 */
      vehicleType?: number;
      /** @default 100 */
      rpOption?: number;
      /** @default false */
      routeInfo?: boolean;
      sX?: number;
      sY?: number;
      sAngle?: number;
      returnUri?: string;
      viaPoints?: ViaPoint[];
    }

    function share(settings: ShareSettings): void;
    function start(settings: StartSettings): void;
  }

  namespace Picker {
    interface FriendPickerBaseSettings {
      /** @default "카카오톡 친구 선택" */
      title?: string;
      /** @default true */
      enableSearch?: boolean;
      /** @default true */
      showMyProfile?: boolean;
      /** @default true */
      showFavorite?: boolean;
      /** @default false */
      enableBackButton?: boolean;
      /** Required for redirect flow */
      returnUrl?: string;
    }

    interface SelectFriendSettings extends FriendPickerBaseSettings {}

    interface SelectFriendsSettings extends FriendPickerBaseSettings {
      /** @default true */
      showPickedFriend?: boolean;
      /** @default 30 */
      maxPickableCount?: number;
      /** @default 1 */
      minPickableCount?: number;
    }

    interface SelectedUser {
      uuid: string;
      id?: string;
      profile_nickname?: string;
      profile_thumbnail_image?: string;
      favorite?: boolean;
    }

    interface FriendsPickerResponse {
      response: {
        selectedTotalCount: number;
        users: SelectedUser[];
      };
    }

    interface PickerError {
      error: {
        code: string;
        msg: string;
      };
    }

    function cleanup(): void;
    function selectFriend(
      settings: SelectFriendSettings,
    ): Promise<FriendsPickerResponse | PickerError>;
    function selectFriends(
      settings: SelectFriendsSettings,
    ): Promise<FriendsPickerResponse | PickerError>;
  }
}
