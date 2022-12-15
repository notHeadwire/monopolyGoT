using Avalonia.Controls;
using Avalonia.Markup.Xaml;

namespace monopolyGoT.Views;

public partial class Gameboard : UserControl
{
    public Gameboard()
    {
        InitializeComponent();
    }

    private void InitializeComponent()
    {
        AvaloniaXamlLoader.Load(this);
    }
}