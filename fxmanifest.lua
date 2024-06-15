fx_version 'cerulean'
game 'gta5'

-- Resource Metadata
name 'MyProtectedResource'
author 'YourName'
version '1.0.0'
description 'A description of your resource'
repository 'https://github.com/yourname/your-repo'

-- Asset Escrow Information
escrow_ignore {
    'html/config.json', -- Make sure your config file is not encrypted so users can edit it
}

-- Files to include
files {
    'html/**',        -- Include all files in the dist folder
    'client/client.lua', -- Client scripts
    'server/server.lua'  -- Server scripts
}

-- Client Scripts
client_scripts {
    'client/client.lua' -- List your client-side scripts here
}

-- Server Scripts
server_scripts {
    'server/server.lua' -- List your server-side scripts here
}

-- UI Page
ui_page 'html/index.html' -- Assuming your main HTML file is here

-- Dependencies
dependencies {
    -- Add any dependencies your resource might have
}

-- Ensure you add the appropriate tag for escrow
lua54 'yes'
