# API Configuration Documentation

## Overview
This document explains the API configuration changes made to support hosting the application on `157.173.210.93:8234`.

## Changes Made

### 1. Centralized API Configuration
- Created `client/src/config/api.js` - Central API configuration file
- Created `client/src/config/environment.js` - Environment configuration file

### 2. Updated Files
The following files have been updated to use the new API configuration:

#### Components
- `client/src/components/discover/Arrivals.jsx`
- `client/src/components/discover/NFTDetails.jsx`
- `client/src/components/sections/NewArrivals.jsx`
- `client/src/components/sections/AuthorsDetail.jsx`

#### Pages
- `client/src/pages/Signup.jsx`
- `client/src/pages/ItemDetails.jsx`
- `client/src/pages/EditProfile.jsx`
- `client/src/pages/CreateItem.jsx`
- `client/src/pages/AuthorProfile.jsx`

#### Context
- `client/src/context/AuthContext.jsx`

### 3. API Configuration Functions

#### `buildApiUrl(endpoint)`
Builds a complete API URL by combining the base URL with the endpoint.
```javascript
import { buildApiUrl } from '../config/api';
const url = buildApiUrl('/api/users/login');
// Result: http://157.173.210.93:8234/api/users/login
```

#### `buildFileUrl(filePath)`
Builds a complete file URL for serving static files.
```javascript
import { buildFileUrl } from '../config/api';
const fileUrl = buildFileUrl('/uploads/image.jpg');
// Result: http://157.173.210.93:8234/uploads/image.jpg
```

## Environment Configuration

### Current Configuration
The API base URL is currently set to: `http://157.173.210.93:8234`

### How to Change Environment
To change the API URL for different environments:

1. **Development**: Update `client/src/config/environment.js`
2. **Production**: Create a `.env` file in the root directory:
   ```
   VITE_API_BASE_URL=http://your-production-domain:port
   ```

### Environment Variables (Recommended for Production)
For production deployment, it's recommended to use environment variables:

1. Create a `.env` file in the root directory:
   ```
   VITE_API_BASE_URL=http://157.173.210.93:8234
   ```

2. Update `client/src/config/environment.js`:
   ```javascript
   const config = {
     API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://157.173.210.93:8234',
     NODE_ENV: process.env.NODE_ENV || 'development',
     ENABLE_DEBUG: process.env.NODE_ENV === 'development',
   };
   ```

## Benefits
1. **Centralized Configuration**: All API URLs are managed in one place
2. **Easy Environment Switching**: Simple to switch between development and production
3. **Maintainable**: No need to search and replace URLs across multiple files
4. **Type Safe**: Helper functions provide consistent URL building

## Testing
After making changes, test the following functionality:
- User registration and login
- NFT creation and viewing
- File uploads and image display
- Author profile pages
- Search and filtering functionality 