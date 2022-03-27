import { InitialLoadingHandler } from 'src/app/shared/utils/models/initial-loading-handler.model';
import { BreedsActions, BreedsActionTypes } from './breeds.actions';
import { breedsInitialState, BreedsState } from './breeds.state';

export function BreedsReducers(
  state = breedsInitialState,
  action: BreedsActions
): BreedsState {
  switch (action.type) {
    // ========== Get Breeds
    case BreedsActionTypes.getList: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          success: false,
          error: null,
        },
      };
    }

    case BreedsActionTypes.getListSuccess: {
      return {
        ...state,
        list: {
          items: action.payload,
          loading: false,
          success: true,
          error: null,
        },
      };
    }

    case BreedsActionTypes.getListFail: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload.error,
        },
      };
    }

    case BreedsActionTypes.getListClear: {
      return {
        ...state,
        list: {
          items: [],
          ...InitialLoadingHandler
        },
      };
    }

    case BreedsActionTypes.getListClearError: {
      return {
        ...state,
        list: {
          ...state.list,
          error: null,
        },
      };
    }

    // ========== Get Details Breed
    case BreedsActionTypes.getDetails: {
      return {
        ...state,
        details: {
          ...state.details,
          loading: true,
          success: false,
          error: null,
        },
      };
    }

    case BreedsActionTypes.getDetailsSuccess: {
      return {
        ...state,
        details: {
          item: action.payload[0],
          loading: false,
          success: true,
          error: null,
        },
      };
    }

    case BreedsActionTypes.getDetailsFail: {
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          error: action.payload.error,
        },
      };
    }

    case BreedsActionTypes.getDetailsClear: {
      return {
        ...state,
        details: {
          item: null,
          ...InitialLoadingHandler
        },
      };
    }

    case BreedsActionTypes.getDetailsClearError: {
      return {
        ...state,
        details: {
          ...state.details,
          error: null,
        },
      };
    }

    // ========== Get Photos Breed
    case BreedsActionTypes.getPhotos: {
      return {
        ...state,
        photos: {
          ...state.photos,
          loading: true,
          success: false,
          error: null,
        },
      };
    }

    case BreedsActionTypes.getPhotosSuccess: {
      return {
        ...state,
        photos: {
          photos: action.payload,
          loading: false,
          success: true,
          error: null,
        },
      };
    }

    case BreedsActionTypes.getPhotosFail: {
      return {
        ...state,
        photos: {
          ...state.photos,
          loading: false,
          error: action.payload.error,
        },
      };
    }

    case BreedsActionTypes.getPhotosClear: {
      return {
        ...state,
        photos: {
          photos: [],
          ...InitialLoadingHandler
        },
      };
    }

    case BreedsActionTypes.getPhotosClearError: {
      return {
        ...state,
        photos: {
          ...state.photos,
          error: null,
        },
      };
    }

    default:
      return {
        ...state,
      };
  }
}
