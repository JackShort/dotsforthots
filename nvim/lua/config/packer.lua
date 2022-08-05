return require("packer").startup(function()
    -- tools
    use("wbthomason/packer.nvim")

    -- git
    use("TimUntersberger/neogit")
    use {
        'lewis6991/gitsigns.nvim',
        config = function()
            require('gitsigns').setup()
        end
    }

    -- syntax
    use {'neoclide/coc.nvim', branch = 'release'}
    use("fannheyward/telescope-coc.nvim")
    use("nvim-treesitter/nvim-treesitter", {
        run = ":TSUpdate"
    })
    use("romgrk/nvim-treesitter-context")

    -- navigation
    use("ThePrimeagen/harpoon")
    use("ggandor/leap.nvim")

    -- search
    use("nvim-lua/plenary.nvim")
    use({
        'nvim-telescope/telescope.nvim', tag = '0.1.0',
        requires = { {'nvim-lua/plenary.nvim'} }
    })
    use {'nvim-telescope/telescope-fzf-native.nvim', run = 'make' }
    use { "nvim-telescope/telescope-file-browser.nvim" }

    -- code manipulation
    use({
        "kylechui/nvim-surround",
        config = function()
            require("nvim-surround").setup({})
        end
    })
    use("mbbill/undotree")
    use("windwp/nvim-ts-autotag")
    use("lukas-reineke/indent-blankline.nvim")
    use("terrortylor/nvim-comment")
    use {
	    "windwp/nvim-autopairs",
        config = function() require("nvim-autopairs").setup {} end
    }

    -- formatter
    use("sbdchd/neoformat")

    -- colors
    use "rebelot/kanagawa.nvim"
    use {'shaunsingh/oxocarbon.nvim', run = './install.sh'}
    use('kyazdani42/nvim-web-devicons')
    use {
        'nvim-lualine/lualine.nvim',
        requires = { 'kyazdani42/nvim-web-devicons', opt = true }
    }

    -- cool stuff
    use({
	    "Pocco81/true-zen.nvim",
	    config = function()
		    require("true-zen").setup {}
	    end,
    })
    use {
      "folke/twilight.nvim",
      config = function()
        require("twilight").setup {}
      end
    }
end)
