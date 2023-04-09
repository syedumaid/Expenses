import MCI from '@expo/vector-icons/MaterialCommunityIcons';

type TabBarIconProps = { 
    color: string;
    size: number;
    type:'expenses' | 'reports' | 'add' | 'settings';
}
export const TabBarIcon = ({type,color,size} : TabBarIconProps) => {
    switch (type) {
        case 'expenses':
            return <MCI name="tray-arrow-up" size={size} color={color} />
        case 'reports':
            return <MCI  name="chart-bar" size={size} color={color} />
        case 'add':
            return <MCI  name="bank-plus" size={size} color={color} />
        case 'settings':
            return <MCI  name="cog" size={size} color={color} />
        default:
            return null;
    }
    
}
